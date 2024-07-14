import Image from "next/image";

interface IGroupAvatars {
  avatars: string[];
}

export default function GroupAvatars({ avatars }: IGroupAvatars) {
  return (
    <>
      <div className="isolate flex -space-x-3 overflow-hidden">
        {avatars.map((avatar, index) => (
          <Image
            key={index}
            className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={avatar}
            width={100}
            height={100}
            alt=""
          />
        ))}
      </div>
    </>
  );
}
