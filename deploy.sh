# This script is used to deploy the application to AWS S3 and invalidate the CloudFront cache.

currentBranch=$(git branch --show-current);

echo "Current Branch: $currentBranch";

if [ $currentBranch != "main" ]
then
    echo "Invalid branch checked out. Only 'main' branch is allowed."
    exit 2;
fi

git fetch
local=$(git rev-parse $currentBranch);
remote=$(git rev-parse origin/$currentBranch);

echo "Local: $local";
echo "Remote: $remote";

if [ $local != $remote ]
then
    echo "Local and remote branches are not in sync."
    exit 2;
fi

echo "Copying .env.prod to .env..."
cp envs/.env.prod .env

echo "Installing dependencies..."
yarn install

echo "Building the project..."
npm run build:prod

aws s3 sync  --profile [aws-configs-profile-name] ./dist s3://[bucket-name]
aws cloudfront create-invalidation --profile aws-configs-profile-name --distribution-id [id] --paths "/*"

# Replace with your own configs, [aws-configs-profile-name], [bucket-name], [id]
