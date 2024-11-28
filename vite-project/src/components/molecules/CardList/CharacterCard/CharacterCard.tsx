import { Character } from '../../../../types'

export function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="flex flex-col p-4 rounded-lg border-2 border-[#FFD700]/20 w-full bg-zinc-900 gap-2 hover:border-[#FFD700]/50 transition-all cursor-pointer">
      <img 
        src={character.image} 
        alt={character.name} 
        className="w-32 h-32 object-cover rounded-full self-center border-2 border-[#FFD700]/30"
      />
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-lg font-semibold text-[#FFD700]">{character.name}</h3>
        <p className="text-[#FFD700]/70">{character.status}</p>
        <p className="text-[#FFD700]/70">{character.species}</p>
      </div>
    </div>
  )
}
