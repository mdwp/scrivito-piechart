import * as React from 'react';
import * as Scrivito from 'scrivito';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';



Scrivito.provideComponent("PieChartWidget", ({ widget }) => {
  const items = widget.get('items');
  const animate = widget.get('animatePiechart') === 'Yes';
  const innerRadius = widget.get('innerRadius');
  const outerRadius = widget.get('outerRadius');
  const fillColor = widget.get('fillColor');
  const height = outerRadius * 2;

  const data = items.map((item) => {
    return { name: item.get('name'), value: item.get('value') }
  });

  console.log(data)

  if (!items.length && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide the piechart values in the widget properties.
        </h4>
    );
  }

  return (

    <ResponsiveContainer width="100%" height={height}>
      <PieChart >
        <Pie dataKey="value" data={data} isAnimationActive={animate} innerRadius={innerRadius} outerRadius={outerRadius} fill={fillColor} label />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
)





