const ProfileSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 ">
            <h1 className="text-4xl md:text-5xl font-bold text-white pb-6">
                Profile Stats
            </h1>
            <div className="relative w-full md:w-[900px] py-5">
                <div className="rounded-lg border border-zinc-800  bg-zinc-900 p-4 h-[500]">
                  { /* profile stats image */}
                </div>
            </div>
        </div>
    )
}

export default ProfileSection;