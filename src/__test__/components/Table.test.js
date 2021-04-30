import { render, screen } from '@testing-library/react';
import Repotable from '../../components/Repotable';
import MOCK_DATA from '../../mock/repos.json'

const mockData = MOCK_DATA;

describe('App Component', () => {
  let repoTbl = 
  beforeEach(() => {
    repoTbl = render(<Repotable repoList={mockData} />);
  })

  test('renders Repotable header row correctly', () => {
    const headerRow = screen.getByTestId('headRow');
    expect(headerRow).toBeInTheDocument();
  });
  
  test('renders Repotable body rows correctly', () => {
    const divRows = screen.getAllByTestId('divRow');
    expect(divRows.length).toBe(8);
  });
})


