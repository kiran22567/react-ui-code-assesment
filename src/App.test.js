import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  let app = 
  beforeEach(() => {
    app = render(<App />)
  })

  test('renders Repotable Title correctly', () => {
    const appTitle = screen.getByText('Repo List View');
    expect(appTitle).toBeInTheDocument();
  });

  test('renders Repotable correctly', () => {
    const repoTable = screen.getByText('Nodata to render table');
    expect(repoTable).toBeInTheDocument();
  });
  
  test('renders Repotable title correctly', () => {
    const repoTitle = screen.getByText('Repo List View');
    expect(repoTitle).toBeInTheDocument();
  });
})

