import { Character } from '../../../types'

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
}

export function CharacterModal({ character, onClose }: CharacterModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
      <div className="bg-zinc-900 rounded-lg p-6 max-w-md w-full m-4 border border-[#FFD700]/30">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#FFD700]">{character.name}</h2>
          <button 
            onClick={onClose}
            className="text-[#FFD700]/70 hover:text-[#FFD700] transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="flex gap-4">
          <img 
            src={character.image} 
            alt={character.name}
            className="w-32 h-32 rounded-lg object-cover border-2 border-[#FFD700]/30"
          />
          <div className="text-[#FFD700]/80">
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Location: {character.location.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
