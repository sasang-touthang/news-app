import no_image from "../../Pages/India/noImage.jpeg";
import moment from "moment";

type CardInfo = {
  title: String;
  image: URL;
  url: URL;
  source: String;
  publishedAt: Date;
};

function NewsCard({
  title,
  image,
  source,
  publishedAt,
  url,
}: CardInfo): JSX.Element {
  return (
    <div className="mb-[4rem] xl:w-[260px] cursor-pointer">
      <a href={`${url}`}>
        <div className="mb-[1rem]">
          {image ? (
            <img
              className="aspect-video rounded-md"
              src={`${image}`}
              alt={`${title}`}
            />
          ) : (
            <img className="aspect-video" src={no_image} />
          )}
        </div>
      </a>
      <div className="flex flex-col gap-5">
        <span className="font_playfair text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] font-medium leading-tight">
          {title}
        </span>
        <div className="flex gap-10 text-[0.6rem] md:text-[0.75rem] font-light text-[#949494]">
          <span>{moment(publishedAt).fromNow()}</span>
          <span>{source} </span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
