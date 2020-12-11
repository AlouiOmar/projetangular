import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
     //   translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'dashboards',
                title    : 'Dashboards',
               // translate: 'NAV.DASHBOARDS',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id   : 'analytics',
                        title: 'Analytics',
                        type : 'item',
                        url  : '/apps/dashboards/analytics'
                    },

                ]
            },
            {
                id       : 'missions',
                title    : 'Missions',
                // translate: 'NAV.SAMPLE',
                type     : 'collapsable',
                icon     : 'school',
                children : [
                    {
                        id   : 'addmission',
                        title: 'Add Mission',
                        type : 'item',
                        url  : '/manager/mission/add'
                    },

                    {
                        id   : 'listmission',
                        title: 'List Missions',
                        type : 'item',
                        url  : '/manager/mission/list'
                    }
                ]
            },
            {
                id       : 'driver',
                title    : 'Driver',
                // translate: 'NAV.SAMPLE',
                type     : 'collapsable',
                icon     : 'person',
                children : [
                    {
                        id   : 'adddriver',
                        title: 'Add Driver',
                        type : 'item',
                        url  : '/manager/driver/add'
                    },

                    {
                        id   : 'listdriver',
                        title: 'List Drivers',
                        type : 'item',
                        url  : '/manager/driver/list'
                    }
                ]
            },
            {
                id       : 'vehicule',
                title    : 'Vehicule',
                // translate: 'NAV.SAMPLE',
                type     : 'collapsable',
                icon     : 'commute',
                children : [
                    {
                        id   : 'addvehicule',
                        title: 'Add Vehicule',
                        type : 'item',
                        url  : '/manager/vehicule/add'
                    },

                    {
                        id   : 'listvehicule',
                        title: 'List Vehicules',
                        type : 'item',
                        url  : '/manager/vehicule/list'
                    }
                ]
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
