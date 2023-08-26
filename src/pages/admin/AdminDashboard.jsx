// import React from 'react'; 
// import { createStyles, Table, Progress, Anchor, Text, Group, ScrollArea, rem } from '@mantine/core';
// import Card from '../components/Card';

// const useStyles = createStyles((theme) => ({
//   progressBar: {
//     '&:not(:first-of-type)': {
//       borderLeft: `${rem(3)} solid ${
//         theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
//       }`,
//     },
//   },
// }));

// export function AdminDashboard({ data }) {
//   const { classes, theme } = useStyles();

//   const rows = data.map((row) => {
//     const totalReviews = row.reviews.negative + row.reviews.positive;
//     const positiveReviews = (row.reviews.positive / totalReviews) * 100;
//     const negativeReviews = (row.reviews.negative / totalReviews) * 100;

//     return (
//       <tr key={row.title}>
//         <td>
//           <Anchor component="button" fz="sm">
//             {row.title}
//           </Anchor>
//         </td>
//         <td>{row.year}</td>
//         <td>
//           <Anchor component="button" fz="sm">
//             {row.author}
//           </Anchor>
//         </td>
//         <td>{Intl.NumberFormat().format(totalReviews)}</td>
//         <td>
//           <Group position="apart">
//             <Text fz="xs" c="teal" weight={700}>
//               {positiveReviews.toFixed(0)}%
//             </Text>
//             <Text fz="xs" c="red" weight={700}>
//               {negativeReviews.toFixed(0)}%
//             </Text>
//           </Group>
//           <Progress
//             classNames={{ bar: classes.progressBar }}
//             sections={[
//               {
//                 value: positiveReviews,
//                 color: theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[6],
//               },
//               {
//                 value: negativeReviews,
//                 color: theme.colorScheme === 'dark' ? theme.colors.red[9] : theme.colors.red[6],
//               },
//             ]}
//           />
//         </td>
//       </tr>
//     );
//   });

//   return (
//     <ScrollArea>
//       <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
//         <thead>
//           <tr>
//             <th>Train Name</th>
//             <th>From Location</th>
//             <th>To Location</th>
//             <th>No of Passengers</th>
//             <th>Passenger Usage</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows}
//           <tr>
//             <td colSpan="5">
//               {/* Render your Card component here */}
//               <Card />
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </ScrollArea>
//   );
// }

// export default AdminDashboard;
