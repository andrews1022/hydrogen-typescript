import React from 'react';

const SizeChart = () => (
  <>
    <h3 className='text-xl text-black font-semibold mt-8 mb-4' id='size-chart'>
      Size Chart
    </h3>
    <table className='min-w-full table-fixed text-sm text-center bg-white'>
      <thead>
        <tr className='bg-black text-white'>
          <th className='w-1/4 py-2 px-4 font-normal'>Board Size</th>
          <th className='w-1/4 py-2 px-4 font-normal'>154</th>
          <th className='w-1/4 py-2 px-4 font-normal'>158</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='p-3 border border-black'>Weight Range</td>
          <td className='p-3 border border-black'>120-180 lbs. /54-82kg</td>
          <td className='p-3 border border-black'>150-200 lbs. /68-91 kg</td>
        </tr>
        <tr>
          <td className='p-3 border border-black'>Waist Width</td>
          <td className='p-3 border border-black'>246mm</td>
          <td className='p-3 border border-black'>255mm</td>
        </tr>
        <tr>
          <td className='p-3 border border-black'>Stance Width</td>
          <td className='p-3 border border-black'>-40</td>
          <td className='p-3 border border-black'>-40</td>
        </tr>
        <tr>
          <td className='p-3 border border-black'>Binding Sizes</td>
          <td className='p-3 border border-black'>Men&rsquo;s S/M, Women&rsquo;s S/M</td>
          <td className='p-3 border border-black'>Men&rsquo;s L, Women&rsquo;s L</td>
        </tr>
      </tbody>
    </table>
  </>
);

export default SizeChart;
