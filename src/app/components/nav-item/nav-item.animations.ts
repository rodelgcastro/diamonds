import {
    trigger, state, style, transition,
    animate, group
} from '@angular/animations';

export const NavItemAnimation = [
    trigger('slide', [
        state('in', style({ 'opacity': '1', 'visibility': 'visible' })),
        state('out', style({ 'opacity': '0', 'visibility': 'hidden' })),
        transition('in => out', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'hidden'
            })),
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('700ms ease-in-out', style({
                'max-height': '0px'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('400ms ease-in-out', style({
                'opacity': '1'
            })),
            animate('700ms ease-in-out', style({
                'max-height': '500px'
            }))
        ]
        )])
    ]),
    trigger('indicatorRotate', [
        state('collapsed', style({ transform: 'rotate(0deg)' })),
        state('expanded', style({ transform: 'rotate(180deg)' })),
        transition('expanded <=> collapsed',
            animate('500ms cubic-bezier(0.4,0.0,0.2,1)')
        ),
    ])
]