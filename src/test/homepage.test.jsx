import {render, screen, fireEvent} from '@testing-library/react';
import Hero from '../frontend/components/homepage/Hero';
import {MemoryRouter} from 'react-router-dom';
import userEvent from "@testing-library/user-event";

// Ensure VITE_APP_URL is set in the test environment
// import.meta.env.VITE_APP_URL = "/";

test('testing homepage hero section', async()=>{
    const user = userEvent.setup();
    render(
        <MemoryRouter>
            <Hero />
        </MemoryRouter>
    );
    // check if hero image is present
    const imgElement = screen.getByAltText('Hero Banner');
    expect(imgElement).toBeInTheDocument();

    // check if there is a tag which will redirect to aeroone gurgaon page
    const linkElement = screen.getAllByRole('link').find((link)=>(
        link.getAttribute('rel') === 'noopener noreferrer'
    ))

    // Check if the link opens in a new tab
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("target","_blank");
    expect(linkElement).toHaveAttribute("href","/aeroone-gurgaon");

    // click
    await user.click(linkElement);

    const heroHeading = document.querySelector('.slider-heading');
    expect(heroHeading).toBeInTheDocument();

    // 

    // check if there is button and clickable
    const button = screen.getByText('Click Here');
    fireEvent.click(button);

    
})