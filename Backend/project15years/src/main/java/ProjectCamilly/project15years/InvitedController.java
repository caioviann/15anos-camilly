package ProjectCamilly.project15years;

import ProjectCamilly.project15years.dto.InvitedUpdateDTO;
import ProjectCamilly.project15years.model.Invited;
import ProjectCamilly.project15years.service.InvitedService;
import org.springframework.http.ResponseEntity;
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


    @PatchMapping("/{id}")
    public ResponseEntity<Invited> changeInvitedStatus(@PathVariable Long id, @RequestBody InvitedUpdateDTO dto){
        Invited invited = service.invitedFindById(id);
        if(dto.getConfirmed() != null){
            invited.setConfirmed(dto.getConfirmed());
        }

        Invited invitedUpdate = service.invitedSave(invited);

        return ResponseEntity.ok(invitedUpdate);
    }
}

