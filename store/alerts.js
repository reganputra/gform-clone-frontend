export const state = () => ({
    alerts: [
        // {message: 'tes1', type:'error', show: true},
        // {message: 'tes2', type:'success', show: true},
        // {message: 'tes3', type:'warning', show: true}
    ]
})

export const mutations = {
    show(state, alert){
        state.alerts.push(alert)
    },
    close(state, index){
       state.alerts[index].show = false
    },
    reset(state){
        state.alerts = []
    }
}