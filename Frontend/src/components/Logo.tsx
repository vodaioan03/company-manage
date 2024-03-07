
export default function Logo() {
    return (
        <div className="bg-[var(--primary)] rounded-full h-8 w-8 p-[2px]">
            <div className="h-full w-full rounded-full bg-[var(--bg)] p-[2px]">
                <div className="relative centerAll border-[2px] border-[var(--gray)] h-full w-full rounded-full">
                    <h4>C</h4>
                    <div className="absolute ml-[1px] h-[7px] w-[7px] rounded-full bg-[var(--primary)]"></div>
                </div>
            </div>
        </div>
    )
}