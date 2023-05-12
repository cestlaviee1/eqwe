module.exports = {
    apps: [
      {
        name: "Moderation",
        namespace: "Ramal",
        script: 'ramal.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "1G",
        cwd: "./_BOTS/Jollity",
        output: '../../../Logger/[11]out.log',
        error: '../../../Logger/[12]error.log',
        log: '../../../Logger/[13]combined.outerr.log'
      },
    //{
        //name: "GUARDAQZ",
        //namespace: "Ramal",
        //script: 'ramalcim.js',
        //watch: false,
        //exec_mode: "cluster",
        //max_memory_restart: "1G",
        //cwd: "./_BOTS/Protection",
        //output: '../../../Logger/[11]out.log',
        //error: '../../../Logger/[12]error.log',
        //log: '../../../Logger/[13]combined.outerr.log'
      //},
    ]
  };