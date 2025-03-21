import {render, screen, fireEvent} from '@testing-library/react';
import Hero from '../frontend/components/homepage/Hero';
import Overview from '../frontend/components/homepage/Overview';
import {MemoryRouter} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import { describe, expect } from 'vitest';

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

    describe('overview section', ()=>{
        // test classname props
        test("overview section applies className prop correctly", ()=>{
            const customClassName = "custom-class";
            render(
                <MemoryRouter>
                    <Overview className={customClassName} />
                </MemoryRouter>
            );

            const overviewSection = screen.getByRole('region', {name: "Overview Section"});
            expect(overviewSection).toHaveClass(customClassName);
        });

        test("overview section renders without crashing", ()=>{
            render(
                <MemoryRouter>
                    <Overview />
                </MemoryRouter>
            );

            // check if the component renders without crashing
            const overviewSection = screen.getByRole('region', {name:"Overview Section"});
            expect(overviewSection).toBeInTheDocument();
        })

        test("displays the correct logo and alt text", ()=>{
            render(
                <MemoryRouter>
                    <Overview />
                </MemoryRouter>
            )

            const logo = screen.getByAltText('mvn aeroone logo');
            expect(logo).toBeInTheDocument();
            expect(logo).toHaveAttribute('src', expect.stringContaining('mvn-aeroone-logo-img.webp'));
        });

        test("displays the correct heading and description", ()=>{
            render(
                <MemoryRouter>
                    <Overview />
                </MemoryRouter>
            );

            const location = document.querySelector('.logo_title');
            const status = document.querySelector('.status');

            // slogan
            const slogan = screen.getByText("Behold to Experience the complete view!");
            
            expect(location).toBeInTheDocument();
            expect(status).toBeInTheDocument();
            expect(slogan).toBeInTheDocument();
        })

        // check logo exist
        // const logoImg = screen.queryByAltText('mvn aeroone logo');
        // expect(logoImg).toBeInTheDocument();
    })
})

