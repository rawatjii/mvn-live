import {render, screen, fireEvent} from '@testing-library/react';
import Hero from '../frontend/components/homepage/Hero';
import {MemoryRouter} from 'react-router-dom';

test('testing homepage hero section', ()=>{
    render(
        <MemoryRouter>
            <Hero />
        </MemoryRouter>
    );

    // check if there is button and clickable
    const button = screen.getByText('Click Here');
    fireEvent.click(button);

    // check if button click redirect to new page
    
})