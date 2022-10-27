
import Image from "next/image"
function Banner() {
  return (
    <div>
        <div>
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
        />
        </div>
    </div>
  )
}

export default Banner