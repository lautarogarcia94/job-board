import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import InfoCard from './InfoCard';
import { InformationCard } from '../../types/informationCard';

describe('InfoCard', () => {
  const renderCard = (mockData: InformationCard) => {
    render(
      <MemoryRouter>
        <InfoCard data={mockData} />
      </MemoryRouter>
    );
  };

  const mockFullData: InformationCard = {
    title: 'For Developers',
    description: 'Browse jobs',
    link: '/jobs',
    linkText: 'Browse Jobs',
    bg: 'bg-gray-100',
    linkClass: 'bg-black hover:bg-gray-700',
  };

  const mockMinimumData: InformationCard = {
    title: 'For Developers',
    description: 'Browse jobs',
    link: '/jobs',
    linkText: 'Browse Jobs',
  };

  it('renders correctly with all props including bg and linkClass', () => {
    renderCard(mockFullData);

    expect(screen.getByText('For Developers')).toBeInTheDocument();
    expect(screen.getByText('Browse jobs')).toBeInTheDocument();
    const link = screen.getByRole('link', { name: 'Browse Jobs' });
    expect(link).toHaveAttribute('href', '/jobs');
  });

  it('renders correctly with minimal props (no bg or linkClass)', () => {
    renderCard(mockMinimumData);

    expect(screen.getByText('For Developers')).toBeInTheDocument();
    expect(screen.getByText('Browse jobs')).toBeInTheDocument();
    const link = screen.getByRole('link', { name: 'Browse Jobs' });
    expect(link).toHaveAttribute('href', '/jobs');
  });
});
