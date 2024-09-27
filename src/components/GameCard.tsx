import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconsList from './PlatformIconsList'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'

interface Props {
	game: Game
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack	>
					<PlatformIconsList
						platforms={game.parent_platform?.map(p => p.platform) || []}
					/>
				</HStack>
				<Heading fontSize='2xl'>
					{game.name}
					<Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	)
}

export default GameCard
