import React from 'react'
import { Character } from '../Character';
import EnemyCard from './EnemyCard';
import { SimpleGrid } from '@chakra-ui/react';

interface Props {
    enemyList: Character[];
}
const EnemyField = ({enemyList}: Props) => {
  return (
    <SimpleGrid columns={5} spacing={5}>
        {enemyList.map((enemy)=> <EnemyCard key={enemy.id} character={enemy}/>)}
  </SimpleGrid>
  )
}

export default EnemyField