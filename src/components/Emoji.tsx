import bullsEye from '../assets/bulls.png'
import thumbsUp from '../assets/tumbsup.png'
import mehImg from '../assets/mehimg.avif'
import { Image, ImageProps } from '@chakra-ui/react'


interface Props {
	rating: number;
}
const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;

	const emojiMap: { [key: number]: ImageProps } = {
		3: { src: mehImg, alt: 'mehImg', boxSize: '25px' },
		4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
		5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' },
	}
  return (
	<Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji
