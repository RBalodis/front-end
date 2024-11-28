import { Character } from '../../../../types'

export function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="flex flex-col p-4 rounded-lg border border-[#FFD700]/20 w-[200px] h-[200px] bg-zinc-900 gap-2 hover:border-[#FFD700]/50 transition-all">
      <img 
        src={character.image} 
        alt={character.name} 
        className="w-24 h-24 object-cover rounded-full self-center border-2 border-[#FFD700]/30"
      />
      <div className="flex flex-col flex-1 gap-1">
        <h3 className="text-lg font-semibold text-center text-[#FFD700]">{character.name}</h3>
      </div>
    </div>
  )
}
