import Packages from "./mock/packages_resp.json"

export const getRepo1 = () => fetch("https://api.github.com/users/octocat/repos");

export const getRepo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Packages) {
                resolve(Packages);
            } else {
                resolve(new Error("No response"));               
            }
        }, 1000)
    })
}