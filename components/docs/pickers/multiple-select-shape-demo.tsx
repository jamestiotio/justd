'use client'

import { useListData } from 'react-stately'
import type { SelectedKey } from 'ui'
import { MultipleSelect, MultipleSelectItem, Tag } from 'ui'

export default function MultipleSelectShapeDemo() {
  const selectedItems = useListData<SelectedKey>({
    initialItems: [fruits[0]]
  })
  return (
    <MultipleSelect
      className="max-w-xs"
      label="Fruits"
      shape="circle"
      selectedItems={selectedItems}
      items={fruits}
      tag={(item) => <Tag textValue={item.name}>{item.name}</Tag>}
    >
      {(item) => {
        return <MultipleSelectItem textValue={item.name}>{item.name}</MultipleSelectItem>
      }}
    </MultipleSelect>
  )
}

const fruits: SelectedKey[] = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Date' },
  { id: 5, name: 'Elderberry' },
  { id: 6, name: 'Fig' },
  { id: 7, name: 'Grape' },
  { id: 8, name: 'Honeydew' },
  { id: 9, name: 'Kiwi' },
  { id: 10, name: 'Lemon' },
  { id: 11, name: 'Mango' },
  { id: 12, name: 'Nectarine' },
  { id: 13, name: 'Orange' },
  { id: 14, name: 'Papaya' },
  { id: 15, name: 'Quince' },
  { id: 16, name: 'Raspberry' },
  { id: 17, name: 'Strawberry' },
  { id: 18, name: 'Tangerine' },
  { id: 19, name: 'Ugli Fruit' },
  { id: 20, name: 'Watermelon' }
]
