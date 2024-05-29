import AvatarCarousel from "../../components/avatarCarousel/AvatarCarousel";

function TimeSchedule() {
  const avatarItems = [
    {
      firstName: "Name#1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      firstName: "Name#2",
      description: "Hello World!",
    },
    {
      firstName: "Name#3",
      description: "I Love Coffe!",
    },
  ];
  return (
    <div>
      <AvatarCarousel avatarItems={avatarItems} />
    </div>
  );
}

export default TimeSchedule;
