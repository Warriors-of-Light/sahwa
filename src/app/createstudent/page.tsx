"use client";
import SearchBar from "@/components/searchbar";
import { db } from "@/firebase/config";
import { Interests, PersonalityTypes } from "@/models/constants";
import { Country, SahwaUser } from "@/models/types";
import { useUserStore } from "@/store/useUserStore";
import { Select } from "@headlessui/react";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { DateTime } from "luxon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import "../../styles/fonts.css";

export default function Profile() {
  const { user } = useUserStore();
  const [name, setName] = useState(user?.displayName);
  const [userName, setUsername] = useState(user?.username);
  const [bio, setBio] = useState(user?.bio);
  const [dateOfBirth, setDateOfBirth] = useState(new Date(user?.birthdate!));
  const [country, setCountry] = useState<Country>("Egypt");
  const [loadMore, setLoadMore] = useState(false);
  const [onMatchRegex, setOnMatchRegex] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<Array<string>>(
    user?.interests ?? []
  );

  const [filteredInterests, setFilteredInterests] = useState<string[]>([
    ...Interests,
  ]);

  const [selectedPersonalityType, setSelectedPersonalityType] = useState(
    user?.personalityType ?? ""
  );

  const onSearch = useCallback((filteredResults: string[] | undefined) => {
    setFilteredInterests(filteredResults ?? [...Interests]);
  }, []);

  // Creating a student profile
  const profileRef = useRef<SahwaUser>({
    name: user?.displayName || name || "",
    birthdate: dateOfBirth.toLocaleString(),
    username: userName!,
    role: "student",
    courses: [],
    dateJoined: DateTime.now().toLocaleString(),
    country: country,
    bio: bio,
    personalityType: selectedPersonalityType,
    friends: [],
    interests: selectedInterests,
  });

  const router = useRouter();
  const now = DateTime.now().setZone("utc");
  const auth = getAuth();

  const onSubmit = useCallback(
    async (e: any) => {
      console.log(profileRef.current);
      e.preventDefault();
      try {
        const docRef = doc(db, "Users", user?.email!);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          await setDoc(docRef, {
            ...docSnap.data(),
            ...profileRef.current,
          });
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    [user?.email]
  );

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-start sm:justify-center p-24  overflow-x-hidden text-black">
      <div
        className="absolute left-20 top-20 cursor-pointer"
        onClick={() => router.push("/home")}
      >
        <span> {"<--"}</span>
      </div>
      <form className="grid lg:grid-cols-2 xs:grid-cols-1" onSubmit={onSubmit}>
        <div className="flex lg:justify-start mt-10 w-full justify-center min-w-96">
          <div className="w-[440px] h-fit bg-red-50 drop-shadow-md p-8 rounded-md justify-center">
            <div className="flex flex-col items-center space-y-4">
              <Image
                className="rounded-full ring-2 ring-white"
                src={user?.photoURL!}
                width={100}
                height={100}
                alt=""
              />
              <div className="flex flex-col space-y-2 w-full">
                <h2 className="text-center text-2xl font-bold text-gray-900">
                  {name ?? user?.displayName}
                </h2>
              </div>

              {(userName || user?.username !== undefined) && (
                <div className="flex space-y-2 w-full justify-center">
                  <h2 className="text-center text-lg font-semibold text-gray-900 rounded-full  ring-1 ring-gray-950 w-fit pr-5 pl-5 ">
                    {`@${userName ?? user?.username}`}
                  </h2>
                </div>
              )}

              <div className="flex flex-col space-y-2 w-full">
                <h2 className="text-center text-xl font-semibold text-gray-900">
                  {`سنة ${
                    !isNaN(
                      Math.floor(
                        now.diff(
                          DateTime.fromJSDate(dateOfBirth).setZone("utc"),
                          "years"
                        ).years
                      )
                    )
                      ? Math.floor(
                          now.diff(
                            DateTime.fromJSDate(dateOfBirth).setZone("utc"),
                            "years"
                          ).years
                        )
                      : 1
                  } 🎂`}
                </h2>
              </div>

              <div className="flex flex-col space-y-2 w-full">
                <label className="text-right text-lg text-gray-700 ">
                  نبذة عني
                </label>
                {bio && bio.length > 0 && (
                  <h4 className="text-center  font-semibold text-gray-900 break-words border-gray-500 p-2 border-2 rounded-md min-h-10">
                    {bio}
                  </h4>
                )}
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-right text-lg text-gray-700 ">
                  نوع شخصيتي
                </label>
                {selectedPersonalityType && (
                  <div className="flex flex-row w-full justify-center">
                    <div className="rounded-full px-4 py-1 text-center m-1  ring-black ring-1 ring-inset">
                      {selectedPersonalityType}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col space-y-2 w-full">
                <label className="text-right text-lg text-gray-700 ">
                  اهتماماتي
                </label>
                <div className="flex flex-wrap justify-center">
                  {selectedInterests.map((interest, key) => (
                    <div
                      key={key}
                      className="rounded-full px-4 py-1 text-center m-1 bg-gradient-to-r from-red-100 to-red-300 ring-gray-800 ring-1 ring-inset"
                    >
                      {interest}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-20">
              <button
                type="submit"
                className="bg-white ring-red-400 ring-1 p-2 pr-7 pl-7 rounded-full absolute right-2 bottom-3  hover:bg-gradient-to-r from-red-100 to-red-400"
              >
                <span>احفظ بياناتك</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end text-right">
          <h2
            className="ml-10 mt-10 text-5xl font-bold tracking-tight text-red-500"
            style={{ fontFamily: "Felfel" }}
          >
            اصنع حسابك الشخصي
          </h2>
          <div className="mt-2 ml-10">
            <div className="flex flex-col items-end space-y-4">
              <div className="flex flex-col min-w-80">
                <label htmlFor="name" className="text-lg text-gray-700">
                  الاسم
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={user?.displayName!}
                  placeholder="ابن الهيثم"
                  onChange={(e) => {
                    setName(e.target.value);
                    profileRef.current = {
                      ...profileRef.current,
                      name: e.target.value,
                    };
                  }}
                  required
                  className="w-full max-w-xs text-right px-2 py-1.5 text-gray-900 rounded-md border-0 shadow-sm ring-1 ring-gray-300 ring-inset focus:ring-red-600 focus:ring-1 "
                />
              </div>
              <div className="flex flex-col min-w-80">
                <label htmlFor="name" className="text-lg text-gray-700">
                  اسم المستخدم
                </label>
                <div className="flex flex-row-reverse rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus: max-w-xs ">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm p-2">
                    @
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    lang="en"
                    placeholder="bn_alhaitham"
                    onChange={(e) => {
                      const value = e.target.value
                        .toLowerCase()
                        .replace(/\s/g, "");

                      setUsername(value);
                      profileRef.current = {
                        ...profileRef.current,
                        username: value,
                      };
                    }}
                    onInput={(e) => {
                      const inputEvent = e.nativeEvent as InputEvent;
                      const char = inputEvent.data;
                      const englishAlphabetRegex = /^[A-Za-z0-9_]+$/;
                      if (char && !englishAlphabetRegex.test(char)) {
                        setOnMatchRegex(true);
                        e.preventDefault();
                      } else {
                        setOnMatchRegex(false);
                      }
                    }}
                    defaultValue={userName}
                    required
                    className="w-full max-w-xs px-2 py-1.5 text-right  text-gray-900 rounded-md border-0  ring-1 ring-gray-300 ring-inset focus:ring-red-600 focus:ring-1"
                  />
                </div>
                {onMatchRegex && (
                  <p className="text-xs text-red-500 mt-1">
                    A-Z, a-z, 0-9, _ :المسموح به فقط
                  </p>
                )}
              </div>

              <div className="flex flex-col min-w-80">
                <label htmlFor="bio" className=" text-lg text-gray-700">
                  نبذة عنك
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  maxLength={150}
                  defaultValue={bio}
                  placeholder="احب الرياضيات و الحاسبات و علوم الكومبيوتر. كما احب التصوير و الرسم و القراءة."
                  onChange={(e) => {
                    setBio(e.target.value);
                    profileRef.current = {
                      ...profileRef.current,
                      bio: e.target.value,
                    };
                  }}
                  required
                  className="w-full max-w-xs px-2 py-1.5 text-right text-gray-900 rounded-md border-0 shadow-sm  ring-1 ring-gray-300 ring-inset focus:ring-red-600 focus:ring-1 "
                />
              </div>
              <div className="flex flex-col min-w-80">
                <label htmlFor="birthday" className=" text-lg text-gray-700">
                  تاريخ الميلاد
                </label>
                <input
                  id="birthday"
                  type="date"
                  defaultValue={dateOfBirth.toDateString()}
                  onChange={(e) => {
                    setDateOfBirth(new Date(e.target.value));
                    profileRef.current = {
                      ...profileRef.current,
                      birthdate: DateTime.fromJSDate(
                        new Date(e.target.value)
                      ).toLocaleString(),
                    };
                  }}
                  required
                  className="w-full max-w-xs px-2 py-1.5 text-right text-gray-900 rounded-md border-0 shadow-sm  ring-1 ring-gray-300 ring-inset focus:ring-red-600 focus:ring-1 "
                />
              </div>

              <label htmlFor="birthday" className="text-lg text-gray-700 mt-2">
                نوع الشخصية
              </label>
              <div className="flex flex-row-reverse items-center gap-x-4">
                <Select
                  className=" w-60 max-w-xs rounded-md text-right ring-gray-300 min-w-80 py-1.5 ring-1 focus:ring-red-600 "
                  defaultValue={selectedPersonalityType}
                  onChange={(e) => {
                    setSelectedPersonalityType(e.target.value);
                    profileRef.current = {
                      ...profileRef.current,
                      personalityType: e.target.value,
                    };
                  }}
                >
                  <option selected hidden disabled value="">
                    نوع الشخصية
                  </option>
                  {Object.values(PersonalityTypes).map(
                    (personalityType, index) => (
                      <option key={index} value={personalityType}>
                        {personalityType}
                      </option>
                    )
                  )}
                </Select>
                <span className="mr-2">
                  لا تعرف شخصيتك؟ اعرفها من{" "}
                  <a
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    href="https://www.16personalities.com"
                  >
                    هنا{" "}
                  </a>{" "}
                </span>
              </div>

              <div className="flex flex-col mt-6 focus:ring-red-600 focus:ring-1 ">
                <label className="text-lg text-gray-700">الاهتمامات</label>

                <div className="flex justify-end w-full mt-2">
                  <SearchBar
                    placeholder="ابحث عن اهتمامك هنا"
                    onSearch={onSearch}
                    searchableContent={[...Interests]}
                  />
                </div>
                {selectedInterests.length === 5 && (
                  <span className="mt-5 text-red-500">
                    لا يمكنك اختيار اكثر من ٥ اهتمامات
                  </span>
                )}
                <div className="flex justify-center items-center min-w-96">
                  <div className="flex flex-wrap justify-center items-center mt-5 min-w-96 gap-3">
                    {filteredInterests.slice(0, 20).map((interest, key) => (
                      <button
                        key={key}
                        type="button"
                        className={`rounded-full min-w-36 w-max ring-2 ring-red-500 p-2 overflow-x-hidden  cursor-pointer ${
                          !selectedInterests.includes(interest) &&
                          selectedInterests.length >= 5 &&
                          "cursor-not-allowed"
                        } ${
                          selectedInterests?.includes(interest)
                            ? "bg-red-200"
                            : "bg-white"
                        }`}
                        onClick={() => {
                          setSelectedInterests((prev) => {
                            if (prev?.includes(interest)) {
                              profileRef.current = {
                                ...profileRef.current,
                                interests: prev?.filter(
                                  (value) => value !== interest
                                ),
                              };
                              return prev.filter((value) => value !== interest);
                            } else {
                              if (prev?.length < 5) {
                                profileRef.current = {
                                  ...profileRef.current,
                                  interests: prev
                                    ? [...prev, interest]
                                    : [interest],
                                };
                                return prev ? [...prev, interest] : [interest];
                              } else {
                                profileRef.current = {
                                  ...profileRef.current,
                                  interests: prev,
                                };
                                return prev;
                              }
                            }
                          });
                        }}
                      >
                        {interest}
                      </button>
                    ))}
                    {!loadMore && (
                      <div className="flex items-center justify-center lg:min-w-[800px] min-w-96">
                        <button
                          type="button"
                          className="bg-lightred rounded-full w-40 mt-2 p-2 ring-black ring-1 ring-inset cursor-pointer"
                          onClick={() => setLoadMore(true)}
                        >
                          اظهر المزيد
                        </button>
                      </div>
                    )}
                    {loadMore &&
                      filteredInterests.slice(20).map((interest, key) => (
                        <button
                          key={key}
                          type="button"
                          className={`rounded-full min-w-36 w-max ring-2 ring-red-500 p-2 overflow-x-hidden  cursor-pointer ${
                            !selectedInterests.includes(interest) &&
                            selectedInterests.length >= 5 &&
                            "cursor-not-allowed"
                          } ${
                            selectedInterests?.includes(interest)
                              ? "bg-red-200"
                              : "bg-white"
                          }`}
                          onClick={() => {
                            setSelectedInterests((prev) => {
                              if (prev?.includes(interest)) {
                                profileRef.current = {
                                  ...profileRef.current,
                                  interests: prev.filter(
                                    (value) => value !== interest
                                  ),
                                };
                                return prev.filter(
                                  (value) => value !== interest
                                );
                              } else {
                                if (prev?.length < 5) {
                                  profileRef.current = {
                                    ...profileRef.current,
                                    interests: prev
                                      ? [...prev, interest]
                                      : [interest],
                                  };
                                  return prev
                                    ? [...prev, interest]
                                    : [interest];
                                } else {
                                  profileRef.current = {
                                    ...profileRef.current,
                                    interests: prev,
                                  };
                                  return prev;
                                }
                              }
                            });
                          }}
                        >
                          {interest}
                        </button>
                      ))}

                    <div className="flex items-center justify-left lg:min-w-[800px] min-w-96" />
                    <div className="mt-2 flex justify-end w-full">
                      <button
                        type="submit"
                        className="bg-red-400 text-white font-bold hover:bg-red-800 ring-red-400 ring-1 p-2 pr-7 pl-7 rounded-md"
                      >
                        <span>احفظ بياناتك</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
