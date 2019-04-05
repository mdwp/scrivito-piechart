import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('PieChartWidget', {
    title: 'Pie Chart',

    attributes: {
        items: {
            title: 'Pie Values',
        },
    },
    properties: [
        'items',
    ]
});