import * as Scrivito from 'scrivito';


const PieChartWidget = Scrivito.provideWidgetClass('PieChartWidget', {
    attributes: {
        items: ['widgetlist', { only: 'PieChartItemWidget' }],


    },
});

export default PieChartWidget;