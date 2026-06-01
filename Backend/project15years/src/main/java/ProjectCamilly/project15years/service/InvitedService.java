package ProjectCamilly.project15years.service;

import ProjectCamilly.project15years.model.Invited;
import ProjectCamilly.project15years.repository.InvitedRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvitedService {
    private final InvitedRepository repository;

    public InvitedService(InvitedRepository repository) {
        this.repository = repository;
    }

    public List<Invited> invitedList(){
        return repository.findAll();
    }
    public Invited invitedSave(Invited invited){
        repository.save(invited);
        return invited;
    }
    public Invited invitedFindById(Long id){
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Convidado não encontrado."));

    }
}
