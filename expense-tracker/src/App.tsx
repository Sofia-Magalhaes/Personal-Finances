import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setcurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* Area de informações */}

        {/* Area de inserção */}

        {/* Tabela de itens */}

      </C.Body>
    </C.Container>
  );
}

export default App;