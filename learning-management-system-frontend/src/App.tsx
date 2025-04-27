// import LoginForm from './components/auth/LoginForm';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import SignupForm from './components/auth/SignupForm';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* <Home /> */}
        <SignupForm />
        {/* <LoginForm /> */}
      </Router>
    </QueryClientProvider>
  );
}

export default App;