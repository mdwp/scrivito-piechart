import * as Scrivito from 'scrivito';

const PieChartItemWidget = Scrivito.provideWidgetClass('PieChartItemWidget', {
    onlyInside: 'PieChartWidget',
    attributes: {
        name: 'string',
        value: 'integer',


    },
});

export default PieChartItemWidget;