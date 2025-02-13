import {render, screen, fireEvent} from '@testing-library/react';
import Hero from '../frontend/components/homepage/Hero';
import Overview from '../frontend/components/homepage/Overview';
import {MemoryRouter} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import { describe } from 'vitest';

// Ensure VITE_APP_URL is set in the test environment
// import.meta.env.VITE_APP_URL = "/";

describe('homepage testing', ()=>{
    test('hero section', async()=>{
        userEvent.setup();
        render(
            <MemoryRouter>
                <Hero />
            </MemoryRouter>
        );
    
        // check if hero image is present
        const imgElement = screen.getByAltText('Hero Banner');
        expect(imgElement).toBeInTheDocument();
    
        // check if there is a tag which will redirect to aeroone gurgaon page
        const linkElements = screen.getAllByRole('link');
    
        const linkElement = linkElements.find(link=>link.getAttribute('rel') === 'noopener noreferrer')
    
        // Check if the link opens in a new tab
        expect(linkElement).toHaveAttribute("target","_blank");
        expect(linkElement).toHaveAttribute("href","/aeroone-gurgaon");
    
        // click
        await userEvent.click(linkElement);
    
        // check if there hero heading
        const heroTitle = document.querySelector('.slider-heading');
        expect(heroTitle).toBeInTheDocument();
    
        // check if there is button and clickable
        const button = document.querySelector('.btn.ink-btn');
        expect(button).toHaveAttribute('href', '/aeroone-gurgaon');
    
        // Simulate a user clicking the button
        await userEvent.click(button)
    
        // check if button click redirect to new page
    
        
        
    })

    test('overview section', ()=>{
        render(
            <MemoryRouter>
                <Overview />
            </MemoryRouter>
        )

        // check logo exist
        const logoImg = screen.queryByAltText('mvn aeroone logo');
        expect(logoImg).toBeInTheDocument();
    })
})

