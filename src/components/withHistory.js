import { useHistory } from 'react-router-dom';

export default function withHistory() {
  const history = useHistory();

  return { history };
}
