export default function UserInput({onChange, userInput}){
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>초기 투자액</label>
                <input type="number" required
                       onChange={(e) => onChange("initialInvestment", e.target.value)}
                       value={userInput.initialInvestment} />
            </p>
            <p>
                <label>연간 투자량</label>
                <input type="number" required
                       onChange={(e) => onChange("annualInvestment", e.target.value)}
                       value={userInput.annualInvestment} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>예상 수익</label>
                <input type="number" required
                       onChange={(e) => onChange("expectedReturn", e.target.value)}
                       value={userInput.expectedReturn} />
            </p>
            <p>
                <label>투자 기간</label>
                <input type="number" required
                       onChange={(e) => onChange("duration", e.target.value)}
                       value={userInput.duration} />
            </p>
        </div>
    </section>
}
