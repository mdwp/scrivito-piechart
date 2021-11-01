import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('PieChartItemWidget', {
    title: 'Pie values',
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