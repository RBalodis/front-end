import { useState } from 'react';
import { Character } from '../../../types'
import { CharacterCard } from './CharacterCard/CharacterCard'
import { CharacterModal } from '../CharacterModal/CharacterModal'

interface CardListProps {
  characters: Character[];
}

function CardList({ characters }: CardListProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <>
      <div className="flex flex-wrap justify-between gap-4">
        {characters.map((character) => (
          <div 
            key={character.id} 
            className="w-[23%] min-w-[250px] cursor-pointer"
            onClick={() => setSelectedCharacter(character)}
          >
            <CharacterCard character={character} />
          </div>
        ))}
      </div>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </>
  )
}

export default CardList