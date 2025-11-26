import React from "react";

const AVATAR_COLORS = [
  "bg-pink-300",
  "bg-yellow-400",
  "bg-blue-600",
  "bg-indigo-500",
  "bg-green-500",
  "bg-orange-200",
];

/**
 * @param {string[]} profileImages
 * @param {string} memberCount
 * @param {function} onButtonClick
 */
const JoinCommunitySection = ({
  profileImages = [],
  memberCount = "100+",
  onButtonClick,
}) => {
  const avatars = Array.isArray(profileImages) ? profileImages : [];
  const firstGroup = avatars.slice(0, 3);
  const secondGroup = avatars.slice(3, 6);

  const renderAvatar = (src, alt, index) => (
    <div
      key={index}
      className={`w-10 h-10 rounded-full border-2 border-white ${
        AVATAR_COLORS[index % AVATAR_COLORS.length]
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );

  return (
    <div className="py-10  content-center text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-black">
        Siap Menjadi Bagian Dari Perubahan?
      </h1>

      <p className="max-w-3xl text-base sm:text-lg lg:text-xl mb-10 text-gray-700 mx-auto">
        Bergabunglah dengan komunitas peduli lingkungan. Dapatkan informasi
        kegiatan, panduan praktis, dan kesempatan untuk beraksi nyata bersama
        kami.
      </p>

      <div className="flex items-center justify-center mb-10">
        <div className="flex -space-x-4">
          {firstGroup.map((src, index) =>
            renderAvatar(src, `profil-${index + 1}`, index)
          )}
        </div>

        <div className="flex flex-col ml-6">
          <p className="text-6xl font-extrabold text-gray-900 leading-none">
            {memberCount}
          </p>
          <p className="text-sm text-gray-600">Orang Sudah Bergabung</p>
        </div>

        <div className="flex -space-x-4 ml-6">
          {secondGroup.map((src, index) =>
            renderAvatar(src, `profil-${index + 4}`, index + 3)
          )}
        </div>
      </div>

      <button
        onClick={onButtonClick}
        className="bg-black contne text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg"
      >
        Segera Gabung Komunitas
      </button>
    </div>
  );
};

export default JoinCommunitySection;
