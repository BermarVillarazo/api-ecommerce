export default function StarRating({ rate, count }: RatingProps) {
    const fullStars = Math.floor(rate);
    const halfStars = rate - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    function renderStars(count: number, type: string) {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(
                <span key={i} role="img" aria-label="star" className="text-xl text-cyan-500 ">
                    {type}
                </span>
            );
        }
        return stars;
    }

    return (
        <span>
            {renderStars(fullStars, "★")}
            {renderStars(halfStars, "★")}
            {renderStars(emptyStars, "☆")} <span>({count})</span>
        </span>
    );
}
