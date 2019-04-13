import * as React from 'react';
import * as Scrivito from 'scrivito';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';



Scrivito.provideComponent("PieChartWidget", ({ widget }) => {
  const items = widget.get('items');

  let data = items.map((item) => {
    let obj = ({ name: item.get('name'), value: item.get('value') })
    return obj;
  });

  if (!items.length && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide the piechart values in the widget properties.
        </h4>
    );
  }

  return (

    <ResponsiveContainer width="100%" height={400}>
      <PieChart >
        <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={75} outerRadius={150} fill="#3367d6" label />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
)





