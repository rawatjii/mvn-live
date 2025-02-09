import {render, screen, fireEvent} from '@testing-library/react';
import Hero from '../frontend/components/homepage/Hero';
import {MemoryRouter} from 'react-router-dom';

// Ensure VITE_APP_URL is set in the test environment
import.meta.env.VITE_APP_URL = "/";

test('testing homepage hero section', async()=>{
    render(
        <MemoryRouter>
            <Hero />
        </MemoryRouter>
    );

    screen.debug();

    // check if hero image is present
    const imgElement = screen.getByAltText('Hero Banner');
    expect(imgElement).toBeInTheDocument();

    // check if there is a tag which will redirect to aeroone gurgaon page
    const linkElement = await screen.findByRole('link');

    // Check if the link opens in a new tab
    expect(linkElement).toHaveAttribute("target","_blank");
    expect(linkElement).toHaveAttribute("href","/aeroone-gurgaon");

    // click
    await userEvent.click(linkElement);

    // check if there is button and clickable
    const button = screen.getByText('Click Here');
    fireEvent.click(button);

    // check if button click redirect to new page
    
})