import {
    trigger, state, style, transition,
    animate, group
} from '@angular/animations';

export const TopNavAnimation = [    
    trigger('iconRotate', [
        state('menu', style({ transform: 'rotate(180deg)' })),
        state('close', style({ transform: 'rotate(180deg)' })),
        transition('menu <=> close',
            animate('500ms cubic-bezier(0.4,0.0,0.2,1)')
        ),
    ])
]