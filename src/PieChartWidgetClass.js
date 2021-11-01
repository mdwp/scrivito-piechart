import * as Scrivito from 'scrivito';


const PieChartWidget = Scrivito.provideWidgetClass('PieChartWidget', {
    attributes: {
        animatePiechart: ["enum", { values: ["Yes", "No"] }],
        innerRadius: 'integer',
        outerRadius: 'integer',
        fillColor: 'string',
        items: ['widgetlist', { only: 'PieChartItemWidget' }],


    },
});

export default PieChartWidget;