import React from 'react';
import { render, screen } from '@testing-library/react';
import { SettingsContext } from '../../Context/Settings';
import List from '../../Components/List';
import '@testing-library/jest-dom/extend-expect'; // Import the necessary matcher

describe('List', () => {
  test('renders list items based on settings', () => {
    // Create a mock list
    const mockList = [
      { id: 1, text: 'Item 1', assignee: 'John', difficulty: 'Easy', complete: false },
      { id: 2, text: 'Item 2', assignee: 'Jane', difficulty: 'Medium', complete: true },
      // Add more mock list items as needed
    ];

    // Render the List component with desired settings and mock list
    render(
      <SettingsContext.Provider value={{ displayCount: 3, showComplete: false, sort: 'difficulty' }}>
        <List list={mockList} toggleComplete={() => {}} />
      </SettingsContext.Provider>
    );

    // Assert that Item 1 is rendered
    expect(screen.getByText('Item 1')).toBeInTheDocument();

    // Assert that Item 2 is not rendered
    expect(screen.queryByText('Item 2')).not.toBeInTheDocument();
  });
});
