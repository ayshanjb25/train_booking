import React, { useState } from 'react';
import { createStyles, Table, ScrollArea, Group } from '@mantine/core';
import PropTypes from 'prop-types';

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

export default function CustomTable({ headers, data, buttonComponents }) {
  const { classes, cx } = useStyles();
  const [selection] = useState([]);

  const rows = data.map((item, index) => {
    const selected = selection.includes(item.id);
    return (
      <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        {headers.map((header) => (
          <td key={header}>{item[header]}</td>
        ))}
        <td>
          <div style={{ display: "flex", gap: "8px" }}>
            <Group>{buttonComponents}</Group>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea style={{ width: "100%" }}>
      <Table miw={800} verticalSpacing="sm" className="table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

CustomTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonComponents: PropTypes.node.isRequired,
};
