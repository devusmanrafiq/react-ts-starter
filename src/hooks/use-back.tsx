import { useNavigate } from 'react-router-dom';

function useBack() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return { handleBack };
}

export default useBack;
