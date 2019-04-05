import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('PieChartItemWidget', {
    title: 'Area values',
    attributes: {

        name: {
            title: 'Name',
        },

        value: {
            title: 'Value',
        },


    },
    properties: [
        'name',
        'value',

    ],

});