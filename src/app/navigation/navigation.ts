import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
     //   translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'books',
                title    : 'Books',
                // translate: 'NAV.SAMPLE',
                type     : 'collapsable',
                icon     : 'school',
                children : [
                    {
                        id   : 'addbook',
                        title: 'Add Book',
                        type : 'item',
                        url  : '/manager/book/add'
                    },

                    {
                        id   : 'listbook',
                        title: 'List Books',
                        type : 'item',
                        url  : '/manager/book/list'
                    }
                ]
            },
            {
                id       : 'stat',
                title    : 'Statistics',
                type     : 'item',
                icon     : 'pie_chart',
                url      : 'stat'
            },
            {
                id       : 'logout',
                title    : 'Logout',
                type     : 'item',
                icon     : 'exit_to_app',
                url      : 'logout'
            },
        ]
    }
];
