import { memo } from 'react';
import Item from './Item';

const List = ({ items }) => {
  return items.map((item, index) => (
    <Item item={item} index={index} key={item.id} />
  ));
};

export default memo(List);
