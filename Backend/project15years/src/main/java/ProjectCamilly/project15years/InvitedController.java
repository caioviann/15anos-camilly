package ProjectCamilly.project15years;

import ProjectCamilly.project15years.model.Invited;
import ProjectCamilly.project15years.service.InvitedService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/invited")
public class InvitedController {
    private final InvitedService service;

    public InvitedController(InvitedService service) {
        this.service = service;
    }

    @GetMapping
    public List<Invited> list(){
        return service.invitedList();
    }
    @PostMapping
    public String addInvited(@RequestBody Invited invited){
        service.invitedSave(invited);
        return "convidados criados: " + invited.getInvitedName();
    }
    @PatchMapping
    public String changeInvitedStatus(){

    }
}

